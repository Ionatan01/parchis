export {
    SUPABASE_KEY,urlBase,headers,
    supaRequest, loginSupabase, fileRequest, getFileRequest, signUpSupabase, logoutSupabase, recoverPasswordSupabase, getData, updateData, createData,
  };
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkdnVvaXdtc3doc2hqbXZtZXZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1NTE5NjIsImV4cCI6MjAxODEyNzk2Mn0.a2Il2WHxjEoxmOvKLyc0LlMKquES1CNLfpYGM72hod8';
  
  const urlBase = 'https://jdvuoiwmswhshjmvmevn.supabase.co';
  const headers = {
    apiKey: SUPABASE_KEY,
    'Content-Type': 'application/json',
  };
  
  async function supaRequest(url, method, headers, body) {
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });
    if (response.status >= 200 && response.status <= 300) { 
      if (response.headers.get('content-type')) {
        return await response.json();
      }
      return {};
    }
  
    return Promise.reject(await response.json()); 
  }
  
  async function fileRequest(url, body, token) {
    const headersFile = {
      apiKey: SUPABASE_KEY,
      Authorization: `Bearer ${token}`,
      'x-upsert': true, 
    };
    const response = await fetch(`${urlBase}${url}`, {
      method: 'POST',
      headers: headersFile,
      body,
    });
    if (response.status >= 200 && response.status <= 300) {
      if (response.headers.get('content-type')) {
        const datos = await response.json(); 
        datos.urlAvatar = `${urlBase}${url}`; 
        return datos;
      }
      return {};
    }
  
    return Promise.reject(await response.json());
  }
  
  async function getFileRequest(url, token) {
    const headersFile = {
      apiKey: SUPABASE_KEY,
      Authorization: `Bearer ${token}`,
    };
    const response = await fetch(`${url}`, {
      method: 'GET',
      headers: headersFile,
  
    });
    if (response.status >= 200 && response.status <= 300) {
      if (response.headers.get('content-type')) {
        const datos = await response.blob();
        return datos;
      }
      return {};
    }
  
    return Promise.reject(await response.json());
  }
  
  async function loginSupabase(email, password) {
    const url = `${urlBase}/auth/v1/token?grant_type=password`;
    const data = await supaRequest(url, 'post', headers, { email, password });
    return data;
  }
  
  async function signUpSupabase(email, password) {
    const url = `${urlBase}/auth/v1/signup`;
    const data = await supaRequest(url, 'post', headers, { email, password });
    return data;
  }
  
  async function logoutSupabase(token) {
    const url = `${urlBase}/auth/v1/logout`;
    const headersAux = { ...headers, Authorization: `Bearer ${token}` };
    const data = await supaRequest(url, 'post', headersAux, {});
    return data;
  }
  
  async function recoverPasswordSupabase(email) {
    const url = `${urlBase}/auth/v1/recover`;
    const headersAux = { ...headers };
    const data = await supaRequest(url, 'post', headersAux, { email });
    return data;
  }
  
  async function getData(URI, token) {
    const url = `${urlBase}/rest/v1/${URI}`;
    const headersAux = { ...headers, Authorization: `Bearer ${token}` };
    const data = await supaRequest(url, 'get', headersAux);
    return data;
  }
  
  async function updateData(URI, token, data) {
    const url = `${urlBase}/rest/v1/${URI}`;
    const headersAux = {
      ...headers,
      Authorization: `Bearer ${token}`,
      Prefer: 'return=representation',
    };
    const response = await supaRequest(url, 'PATCH', headersAux, data);
    return response;
  }
  
  async function createData(URI, token, data) {
    const url = `${urlBase}/rest/v1/${URI}`;
    const headersAux = {
      ...headers,
      Authorization: `Bearer ${token}`,
      Prefer: 'return=representation',
    };
    const response = await supaRequest(url, 'post', headersAux, data);
    return response;
  }
  