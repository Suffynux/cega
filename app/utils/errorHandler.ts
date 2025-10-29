export function handleError(error: any) {
  console.error("❌ Error occurred:", error);

  // Handle known error types
  if (error.name === "ValidationError") {
    // Extract readable messages from each field
    const fieldMessages = Object.values(error.errors || {}).map(
      (e: any) => e.message
    );

    return {
      message:
        fieldMessages.length > 0
          ? fieldMessages.join(" | ")
          : "Validation failed.",
      status: 400,
      details: error.errors || null,
    };
  }

  if (error.name === "MongoServerError") {
    return {
      message: "Database operation failed.",
      status: 500,
      details: error.message,
    };
  }

  // Default fallback
  return {
    message: error.message || "Internal Server Error",
    status: 500,
  };
}
