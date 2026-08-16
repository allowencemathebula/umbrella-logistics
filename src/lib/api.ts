// Base URL of the Spring Boot backend.
// Override by creating a .env file with VITE_API_BASE_URL=http://localhost:8080/api
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    // The backend returns { message: "..." } for 404s and { fields: {...} } for 400s
    const body = await response.json().catch(() => null);
    const message =
      body?.message ||
      (body?.fields && Object.values(body.fields).join(", ")) ||
      `Request failed (${response.status})`;

    throw new ApiError(message, response.status);
  }

  // 204 No Content has no body to parse
  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

// ---------- Shipments ----------

export type Shipment = {
  id: number;
  reference: string;
  origin: string;
  destination: string;
  cargo: string;
  status: string;
  statusDescription: string;
  updatedAt?: string;
  progress: number;
};

export function getShipmentByReference(reference: string) {
  return request<Shipment>(`/shipments/${encodeURIComponent(reference)}`);
}

// ---------- Quotes ----------

export type QuoteRequestPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export function submitQuoteRequest(payload: QuoteRequestPayload) {
  return request<QuoteRequestPayload & { id: number }>("/quotes", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
