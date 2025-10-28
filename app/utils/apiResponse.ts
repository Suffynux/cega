export function successResponse(data:any, message = "Success", status = 200) {
  return new Response(
    JSON.stringify({
      success: true,
      message,
      data,
    }),
    {
      status,
      headers: { "Content-Type": "application/json" },
    }
  );
}

export function errorResponse(message = "Something went wrong", status = 500, details :any) {
  return new Response(
    JSON.stringify({
      success: false,
      message,
      ...(details && { details }), // optional extra info
    }),
    {
      status,
      headers: { "Content-Type": "application/json" },
    }
  );
}
