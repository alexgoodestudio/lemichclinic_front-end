const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);
    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}


export async function updateContact(contact_id, formData, signal) {
    const url = `${API_BASE_URL}/contacts/${contact_id}`;
    const options = {
        headers,
        method: "PUT",
        body: JSON.stringify({ data: formData }),
        signal,
    };
    // Assuming the API response contains the updated data
    const response = await fetchJson(url, options);
    return response.data;  // Adjust this based on your API response structure
  }
  
  export async function readContact(contact_id, signal) {
    const url = `${API_BASE_URL}/contacts/${contact_id}`;
    return await fetchJson(url, { headers, signal }, {});
  }
  
  export async function createContact(contact, signal){
    const url = `${API_BASE_URL}/contacts`;
      const options ={
        headers,
        method:"POST",
        body:JSON.stringify({data: contact}),
        signal
      }
    return await fetchJson(url, options, contact)
  }
  
  export async function deleteContact(contact_id,formData, signal){
    const url = `${API_BASE_URL}/contacts/${contact_id}`;
    const options = {
      method: "DELETE",
      headers,
      signal,
    };
    return await fetchJson(url, options);
  }
  
  export async function listContacts(signal){
    const url = `${API_BASE_URL}/contacts`;
    return await fetchJson(url, { headers, signal });
  }
  
  