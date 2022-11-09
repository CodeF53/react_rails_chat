export const fetchPatch  = url => fetch(url, { method:"PATCH" })
export const fetchPost   = url => fetch(url, { method:"POST" })
export const fetchDelete = url => fetch(url, { method:"DELETE" })

export const fetchPatch_data = (url, data) => fetch(url, { method:"PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
export const fetchPost_data  = (url, data) => fetch(url, { method:"POST",  headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })