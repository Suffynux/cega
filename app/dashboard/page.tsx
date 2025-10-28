import Link from "next/link";

import { connectToDatabase } from "@/app/lib/dbConnect";
import signUp from "@/app/models/signUpForm";

type Submission = {
	id: string;
	fullName: string;
	email: string;
	startupName?: string;
	productTitle: string;
	currentStage?: string;
	teamMembersCount?: number;
	revenueLast12Months?: number;
	createdAt?: string;
};

async function fetchSubmissions(): Promise<Submission[]> {
	await connectToDatabase();
	const records = await signUp
		.find()
		.sort({ createdAt: -1 })
		.lean();

	return records.map((entry: any, index: number) => ({
		id: entry._id?.toString() ?? `submission-${index}`,
		fullName: entry.fullName,
		email: entry.email,
		startupName: entry.startupName,
		productTitle: entry.productTitle,
		currentStage: entry.currentStage,
		teamMembersCount: entry.teamMembersCount,
		revenueLast12Months:
			typeof entry.revenueLast12Months === "number"
				? entry.revenueLast12Months
				: Number(entry.revenueLast12Months ?? 0),
		createdAt: entry.createdAt ? new Date(entry.createdAt).toISOString() : undefined,
	}));
}

function formatDate(value?: string) {
	if (!value) return "—";
	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	}).format(new Date(value));
}

function formatCurrency(value?: number) {
	if (value === undefined || Number.isNaN(value)) return "—";
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
	}).format(value);
}

export default async function DashboardPage() {
	const submissions = await fetchSubmissions();

	return (
		<div className="min-h-screen bg-linear-to-b from-slate-950 via-indigo-950 to-black text-slate-100">
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16">
				<header className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
					<div>
						<p className="text-xs uppercase tracking-[0.4em] text-indigo-400">Mission Control</p>
						<h1 className="mt-2 text-4xl font-semibold text-white">Founder Intake Dashboard</h1>
						<p className="mt-2 max-w-2xl text-sm text-slate-300">
							Track every signed-up squad member, monitor their launch stage, and keep tabs on
							the runway so your acceleration program can stay in hyperdrive.
						</p>
					</div>

							<Link
								href="/signup"
								className="inline-flex items-center justify-center rounded-xl border border-fuchsia-400/60 bg-linear-to-r from-fuchsia-600 via-purple-600 to-blue-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_rgba(192,132,252,0.35)] transition hover:scale-[1.03] hover:shadow-[0_14px_40px_rgba(192,132,252,0.45)]"
							>
						New Application
					</Link>
				</header>

				<section className="rounded-3xl border border-indigo-500/40 bg-slate-900/40 p-6 shadow-[0_0_45px_rgba(37,99,235,0.25)] backdrop-blur">
					<div className="flex flex-wrap items-center gap-4 border-b border-indigo-500/20 pb-4">
						<StatCard label="Active Applications" value={submissions.length.toString()} accent="from-indigo-500 to-cyan-400" />
						<StatCard
							label="Avg. Team Size"
							value={calculateAverage(submissions.map((entry) => entry.teamMembersCount)).toFixed(1)}
							accent="from-purple-500 to-fuchsia-500"
						/>
						<StatCard
							label="Total Reported Revenue"
							value={formatCurrency(sumNumbers(submissions.map((entry) => entry.revenueLast12Months)))}
							accent="from-emerald-500 to-teal-400"
						/>
					</div>

					<div className="mt-6 overflow-x-auto">
						<table className="min-w-full divide-y divide-indigo-500/20 text-left text-sm">
							<thead>
								<tr className="text-xs uppercase tracking-[0.2em] text-indigo-300/80">
									<th className="px-4 py-3">Applicant</th>
									<th className="px-4 py-3">Startup</th>
									<th className="px-4 py-3">Stage</th>
									<th className="px-4 py-3">Team</th>
									<th className="px-4 py-3">Revenue</th>
									<th className="px-4 py-3">Submitted</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-indigo-500/10 text-slate-200">
								{submissions.length === 0 && (
									<tr>
										<td colSpan={6} className="px-4 py-10 text-center text-sm text-slate-400">
											No submissions yet. Send the signup link and rally your next wave of founders.
										</td>
									</tr>
								)}

								{submissions.map((submission) => (
									<tr key={submission.id} className="hover:bg-slate-800/40">
										<td className="px-4 py-4 align-top">
											<div className="font-semibold text-white">{submission.fullName}</div>
											<div className="text-xs text-indigo-300">{submission.email}</div>
										</td>
										<td className="px-4 py-4 align-top">
											<div className="font-medium text-slate-200">{submission.startupName || "—"}</div>
											<div className="text-xs text-slate-400">{submission.productTitle}</div>
										</td>
										<td className="px-4 py-4 align-top">
											<span className="inline-flex rounded-lg border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-indigo-200">
												{submission.currentStage || "Unknown"}
											</span>
										</td>
										<td className="px-4 py-4 align-top text-sm text-slate-300">
											{submission.teamMembersCount ?? "—"}
										</td>
										<td className="px-4 py-4 align-top text-sm text-slate-300">
											{formatCurrency(submission.revenueLast12Months)}
										</td>
										<td className="px-4 py-4 align-top text-xs text-slate-400">
											{formatDate(submission.createdAt)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>
			</div>
		</div>
	);
}

type StatCardProps = {
	label: string;
	value: string;
	accent: string;
};

function StatCard({ label, value, accent }: StatCardProps) {
	return (
		<div className="inline-flex min-w-40 flex-1 flex-col gap-1 rounded-2xl border border-indigo-400/30 bg-slate-900/60 p-4 text-slate-200 shadow-[0_0_25px_rgba(129,140,248,0.25)]">
			<span className="text-xs uppercase tracking-[0.3em] text-indigo-300/80">{label}</span>
			<span className={`text-2xl font-semibold bg-clip-text text-transparent bg-linear-to-r ${accent}`}>
				{value}
			</span>
		</div>
	);
}


function sumNumbers(values: Array<number | undefined>) {
	return values.reduce((total: number, value) => {
		if (typeof value === "number" && !Number.isNaN(value)) {
			return total + value;
		}
		return total;
	}, 0);
}

function calculateAverage(values: Array<number | undefined>) {
	const filtered = values.filter((value): value is number => typeof value === "number" && !Number.isNaN(value));
	if (filtered.length === 0) return 0;
	return filtered.reduce((total, value) => total + value, 0) / filtered.length;
}