export async function changeAvatar(file: File, userId: string) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("userId", userId);

  const response = await fetch("/api/avatar", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong");
  }

  return data as { avatar_url: string };
}

export async function updateProfile(data: { id: string; full_name: string }) {
  const res = await fetch("/api/profile", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || "فشل تحديث البيانات");
  }

  const resData = (await res.json()) as IUser;

  return resData;
}

export async function getProfile() {
  const res = await fetch("/api/profile", {
    method: "GET",
    credentials: "include", // ensures cookies are sent
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Failed to fetch profile");
  }

  return (await res.json()) as IUser;
}

export async function getProfessionalProfile() {
  const res = await fetch("/api/professionals/profile", {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Failed to fetch professional profile");
  }

  return (await res.json()) as IProfessional;
}

export async function getProfessionalById(id: string) {
  const res = await fetch(`/api/professionals/${id}`);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Failed to fetch professional");
  }

  return (await res.json()) as IProfessional;
}
