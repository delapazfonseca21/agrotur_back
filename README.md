
## **1️⃣ Registro de Usuario (`POST /api/auth/register`)**
### **Solicitud (Request)**
```json
{
  "name": "Juan Pérez",
  "phone": "+521234567890",
  "email": "juanperez@example.com",
  "password": "SecurePass123!"
}
```
### **Ejemplo con cURL**
```sh
curl -X POST https://tu-api.cleverapps.io/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Juan Pérez",
       "phone": "+521234567890",
       "email": "juanperez@example.com",
       "password": "SecurePass123!"
     }'
```
### **Respuesta (Response)**
```json
{
  "message": "Usuario registrado exitosamente",
  "user": {
    "id": 1,
    "name": "Juan Pérez",
    "phone": "+521234567890",
    "email": "juanperez@example.com",
    "createdAt": "2025-02-05T12:00:00.000Z"
  }
}
```

---

## **2️⃣ Login de Usuario (`POST /api/auth/login`)**
### **Solicitud (Request)**
```json
{
  "email": "juanperez@example.com",
  "password": "SecurePass123!"
}
```
### **Ejemplo con cURL**
```sh
curl -X POST https://tu-api.cleverapps.io/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{
       "email": "juanperez@example.com",
       "password": "SecurePass123!"
     }'
```
### **Respuesta (Response)**
```json
{
  "message": "Inicio de sesión exitoso",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Juan Pérez",
    "email": "juanperez@example.com"
  }
}
```

---

## **📌 Notas Importantes**
✅ **El `token` devuelto en el login** se debe usar en futuras peticiones protegidas.  
✅ **Las contraseñas deben estar cifradas** en la base de datos.  
✅ **El email debe ser único** en la base de datos.  
