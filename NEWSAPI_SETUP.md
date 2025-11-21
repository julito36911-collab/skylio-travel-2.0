# 📰 Configuración de NewsAPI para Skylio Hub

## 🎯 ¿Qué es esto?

Tu app de viajes **Skylio Hub** incluye una sección de **noticias de viajes** que muestra artículos recientes y relevantes en 3 idiomas (Español, Inglés, Hebreo).

Esta sección usa **NewsAPI.org** para obtener las noticias.

---

## 🔑 Paso 1: Obtener tu API Key GRATUITA

1. Ve a: **https://newsapi.org/register**
2. Completa el formulario de registro
3. Verifica tu email
4. Copia tu API Key (se ve así: `abc123def456ghi789jkl012mno345pq`)

**Plan Gratuito incluye:**
- ✅ 100 requests por día
- ✅ Acceso a noticias de los últimos 30 días
- ✅ Todos los idiomas disponibles

---

## ⚙️ Paso 2: Configurar la API Key

### **Opción A: Variable de Entorno (Recomendado)**

Abre el archivo `/app/frontend/.env` y descomenta/añade:

```bash
REACT_APP_NEWS_API_KEY=tu_api_key_aqui
```

Reemplaza `tu_api_key_aqui` con tu clave real.

**Ejemplo:**
```bash
REACT_APP_NEWS_API_KEY=abc123def456ghi789jkl012mno345pq
```

### **Opción B: Directamente en el Código (No recomendado)**

Edita `/app/frontend/src/components/news/NewsSection.jsx` línea 6:

```javascript
const API_KEY = 'tu_api_key_aqui';
```

⚠️ **Nota:** Esta opción expone tu API key en el código fuente.

---

## 🔄 Paso 3: Reiniciar el Frontend

Para que los cambios tomen efecto:

```bash
sudo supervisorctl restart frontend
```

O si estás en desarrollo local:
```bash
cd /app/frontend
yarn start
```

---

## ✅ Verificar que Funciona

1. Abre tu app en el navegador
2. Desplázate hacia abajo
3. Deberías ver la sección **"Últimas Noticias de Viajes"** con 6 artículos
4. Cambia de idioma (🇪🇸 🇬🇧 🇮🇱) y las noticias se actualizarán automáticamente

---

## 🎯 Cómo Funciona

### **Filtros Inteligentes por Idioma**

La app usa **filtros AND/OR** específicos para cada idioma que garantizan que **solo aparezcan noticias de viajes relevantes**:

#### **🇪🇸 Español**
```
(viajes OR turismo OR vacaciones) AND (destinos OR aerolíneas OR hoteles OR vuelos OR aeropuerto OR pasajeros)
```

**Lógica:** El artículo DEBE tener al menos una palabra del grupo 1 (viajes/turismo/vacaciones) **Y** al menos una del grupo 2 (destinos/aerolíneas/hoteles/etc).

**Ejemplos que aparecen:**
- ✅ "Las mejores **vacaciones** en los nuevos **destinos** de 2025"
- ✅ "**Aerolíneas** aumentan precios de **viajes** internacionales"

**Ejemplos que NO aparecen:**
- ❌ "Vacaciones escolares en Madrid" (no menciona destinos/vuelos/hoteles)
- ❌ "Hoteles de lujo en el centro" (no menciona viajes/turismo)

---

#### **🇬🇧 Inglés**
```
(travel OR tourism OR vacation) AND (destination OR airlines OR hotels OR flights OR airport)
```

**Ejemplos que aparecen:**
- ✅ "Best **travel** **destinations** for 2025"
- ✅ "**Airlines** announce new **vacation** routes"

---

#### **🇮🇱 Hebreo**

Cuando el usuario selecciona hebreo, **la app automáticamente busca en inglés** porque NewsAPI tiene contenido limitado en hebreo.

**Razón:** Es mejor mostrar noticias relevantes en inglés que no mostrar nada.

---

## 💾 Sistema de Caché (6 horas)

Para ahorrar requests de tu cuota diaria:

- Las noticias se guardan en **localStorage** por **6 horas** por idioma
- Si cambias de español a inglés, cada idioma tiene su propio caché
- Después de 6 horas, se obtienen noticias frescas automáticamente

**Ejemplo:**
- 10:00 AM → Usuario ve noticias en español (se guardan en caché)
- 10:30 AM → Otro usuario ve noticias en español (usa caché, no gasta request)
- 11:00 AM → Usuario cambia a inglés (obtiene noticias en inglés, nuevo request)
- 04:00 PM → Caché de español expira (próximo usuario obtendrá noticias frescas)

---

## 🔧 Solución de Problemas

### **No aparece la sección de noticias**

**Causa:** No hay API key configurada.

**Solución:** Sigue los pasos 1 y 2 de arriba.

---

### **Error: "Request failed with status 401"**

**Causa:** API key inválida o expirada.

**Solución:** 
1. Verifica que copiaste la clave completa (sin espacios)
2. Ve a https://newsapi.org/account y verifica que tu cuenta esté activa

---

### **Error: "Request failed with status 426"**

**Causa:** Estás intentando acceder desde localhost con el plan gratuito.

**Solución:** 
- NewsAPI plan gratuito no funciona en localhost
- Usa el plan Developer ($449/mes) o despliega tu app en un dominio real

---

### **Solo aparecen 2-3 noticias en lugar de 6**

**Causa:** Muchos artículos no tienen imagen o descripción completa.

**Solución:** Esto es normal. La app filtra automáticamente artículos sin imagen o descripción para mantener calidad visual. Si quieres más artículos, edita la línea 59 de `NewsSection.jsx`:

```javascript
pageSize=8  // Cambia a 12 o 15
```

---

### **Las noticias no cambian cuando cambio de idioma**

**Causa:** Caché activo.

**Solución:** 
1. Abre DevTools del navegador (F12)
2. Application → Storage → Local Storage
3. Elimina las claves que empiecen con `skylio_news_`
4. Recarga la página

---

## 📊 Monitoreo

Puedes ver logs en la consola del navegador (F12):

```
✅ Usando caché para idioma: es
📡 Obteniendo noticias frescas para idioma: en
✅ 6 noticias guardadas en caché para en
```

---

## 🚀 Próximos Pasos

Una vez configurada la API key:

1. ✅ Las noticias aparecerán automáticamente
2. ✅ Se actualizarán cada 6 horas
3. ✅ Cambiarán según el idioma seleccionado
4. ✅ Mostrarán solo contenido relevante de viajes

---

## 📝 Notas Técnicas

**Ubicación de archivos:**
- Componente: `/app/frontend/src/components/news/NewsSection.jsx`
- Variables de entorno: `/app/frontend/.env`
- Filtros de idiomas: Líneas 12-16 de `NewsSection.jsx`

**Rate Limits:**
- Plan gratuito: 100 requests/día
- Con caché de 6 horas: ~12-16 requests/día (muy por debajo del límite)

**Seguridad:**
- La API key está en variable de entorno (no en el código)
- No se sube a Git (está en `.gitignore`)
- Solo se usa desde el frontend (no hay servidor intermediario necesario)

---

¿Necesitas ayuda? Revisa la documentación oficial: https://newsapi.org/docs
