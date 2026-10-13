type Status = "loading" | "success" | "error";

const statusMessages: Record<Status, string> = {
  loading: "Завантаження...",
  success: "Успіх!",
  error: "Помилка!",
};

function logStatus(status: Status): void {
  console.log(statusMessages[status]);
}

logStatus("loading");
logStatus("success");
logStatus("error");
