# 🤖 CONFIGURACIÓN DEL CHATBOT CON IA

## Paso 1: Obtener API Key de Google Gemini (GRATIS)

1. Ve a: https://aistudio.google.com/app/apikey
2. Inicia sesión con tu cuenta de Google
3. Click en "Create API Key"
4. Copia la clave generada

## Paso 2: Configurar el Proyecto

1. Crea un archivo `.env` en la raíz del proyecto:
   ```bash
   cd /home/aj/Documentos/DEV/ECOFAMIL/ecofamil
   cp .env.example .env
   ```

2. Abre el archivo `.env` y pega tu API key:
   ```
   GEMINI_API_KEY=tu_api_key_aqui
   ```

## Paso 3: Reiniciar el Servidor

```bash
# Detén el servidor actual (Ctrl+C)
# Luego reinicia:
pnpm dev
```

## ✅ ¡Listo!

El chatbot ahora tiene IA y puede:
- Responder preguntas inteligentes sobre Ecofamil
- Mantener contexto de la conversación
- Proporcionar información detallada sobre servicios
- Dar respuestas naturales y profesionales

## 🧪 Pruébalo

Abre http://localhost:4321 y pregunta cosas como:
- "¿Qué servicios tienen para empresas mineras?"
- "Necesito alquilar baños portátiles"
- "¿Cuánto cuesta la gestión de residuos?"

## 🚨 Si NO tienes API Key

El chatbot funcionará con mensajes de fallback que invitan a contactar directamente.
No habrá errores, solo respuestas predeterminadas.

## 📊 Límites del API Gratuito

- 15 requests por minuto
- 1 millón de tokens por día
- Más que suficiente para un sitio web empresarial
