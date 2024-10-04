# calculadora-fletestereo

Para hacer modificaciones en un proyecto que está en un repositorio de GitHub y que esas modificaciones se reflejen automáticamente en Vercel, debes seguir estos pasos. Este tutorial asume que ya tienes un proyecto en GitHub y está vinculado a Vercel.

### Requisitos previos
- Un proyecto alojado en GitHub.
- Una cuenta en [Vercel](https://vercel.com/).
- El proyecto ya está desplegado en Vercel.

### Pasos para realizar modificaciones y actualizarlas en Vercel

#### 1. **Clonar el repositorio en tu máquina local**

1. Abre una terminal en tu computadora.
2. Navega hasta la carpeta donde deseas clonar el repositorio.
3. Clona el repositorio con el siguiente comando (reemplaza `URL_DEL_REPOSITORIO` con la URL de tu repositorio en GitHub):

   ```bash
   git clone https://github.com/usuario/nombre-del-repositorio.git
   ```

4. Entra en la carpeta del proyecto:

   ```bash
   cd nombre-del-repositorio
   ```

#### 2. **Crear una nueva rama (opcional pero recomendado)**

Si quieres mantener tu rama principal (`main` o `master`) sin cambios hasta que las modificaciones estén listas, puedes crear una nueva rama:

```bash
git checkout -b nombre-de-la-rama
```

#### 3. **Realizar las modificaciones en el proyecto**

- Abre el proyecto en tu editor de código favorito (por ejemplo, VS Code).
- Realiza los cambios que necesites en los archivos del proyecto.

#### 4. **Agregar los cambios al control de versiones (Git)**

1. Verifica los archivos modificados:

   ```bash
   git status
   ```

2. Agrega los archivos modificados al área de preparación (staging):

   ```bash
   git add .
   ```

3. Haz un commit con un mensaje descriptivo:

   ```bash
   git commit -m "Descripción de los cambios realizados"
   ```

#### 5. **Subir los cambios al repositorio de GitHub**

Para que los cambios lleguen a GitHub, debes hacer un `push` a tu rama (puede ser la rama principal o la nueva que creaste en el paso 2):

Si estás en la rama principal:

```bash
git push origin main
```

Si estás en una rama diferente:

```bash
git push origin nombre-de-la-rama
```

#### 6. **Verificar la integración con Vercel**

Si tu proyecto ya está vinculado con Vercel, la plataforma automáticamente detectará los cambios que has hecho en GitHub y comenzará el proceso de despliegue.

1. **Despliegue Automático**: Vercel está configurado para desplegar automáticamente cada vez que hay cambios en la rama que seleccionaste para despliegue (generalmente `main` o `master`). Cuando haces un `push` a esta rama, Vercel inicia el despliegue.

2. Puedes monitorear el progreso del despliegue en el dashboard de Vercel:

   - Ve a [tu dashboard en Vercel](https://vercel.com/dashboard).
   - Selecciona el proyecto correspondiente.
   - Verás un mensaje de que el despliegue está en curso o ya ha sido completado. También puedes ver los registros del despliegue en caso de que haya algún problema.

#### 7. **Confirmar que los cambios están en producción**

Una vez que Vercel haya completado el despliegue, ve a la URL de tu proyecto en Vercel (por ejemplo: `https://nombre-de-tu-proyecto.vercel.app`) y verifica que los cambios se reflejan correctamente.

### Bonus: **Desplegar desde ramas diferentes**

Si has hecho `push` en una rama distinta de la principal, puedes hacer un "Pull Request" en GitHub y luego fusionarlo (`merge`) con la rama principal. Al hacerlo, Vercel desplegará automáticamente los cambios en producción.

1. Ve al repositorio en GitHub.
2. Crea un Pull Request (PR) desde tu rama hacia la rama principal.
3. Fusiona el PR cuando los cambios estén listos.

### Resumen
- Clonas el repositorio en tu máquina local.
- Realizas las modificaciones en tu código.
- Usas Git para hacer `commit` y `push` de los cambios a GitHub.
- Vercel se encarga automáticamente de detectar los cambios y desplegarlos.

¡Con esto, tus modificaciones se actualizarán en Vercel sin tener que realizar configuraciones adicionales!
