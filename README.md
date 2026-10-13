# 🏋️ AgroFit

Sistema de gestión de gimnasio y bienestar para el **SENA**, pensado para administrar usuarios (aprendices, funcionarios e instructores), rutinas de ejercicio y máquinas del gimnasio.

> **Versión actual:** `v1.0.0` · Primera versión del proyecto AgroFit
> **Programa:** SENA – ADSO · Ficha 3387753

---

## 📖 Descripción

AgroFit busca facilitar el trabajo del instructor del gimnasio y el seguimiento de los usuarios que lo utilizan. El sistema permite:

- Registrar usuarios con distintos roles (Entrenador, Funcionario, Aprendiz).
- Crear, editar y consultar rutinas de ejercicio.
- Asignar rutinas a los aprendices según su nivel y objetivo.
- Administrar el inventario de máquinas y su estado.
- Consultar el perfil de cada usuario y su progreso.

El proyecto se compone de una **maquetación web** (HTML/CSS/JS), un **backend en Python** que se ejecuta por consola y una **base de datos MySQL**.

---

## 🧰 Tecnologías

| Parte | Tecnología |
|---|---|
| Frontend | HTML5, CSS, JavaScript |
| Íconos | [Font Awesome 6.5](https://fontawesome.com/) (por CDN) |
| Backend | Python 3 |
| Base de datos | MySQL |
| Control de versiones | Git y GitHub |

---

### Vistas de acceso y registro

| Archivo | Descripción |
|---|---|
| `inicio_agrofit.html` | Inicio de sesión |
| `recuperar1_agrofit.html`, `recuperar2_agrofit.html`, `recuperar3_agrofit.html` | Flujo de recuperación de contraseña |
| `registrar-usu_agrofit.html` | Registro de usuarios con campos que cambian según el rol |

---

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone <URL-DEL-REPOSITORIO>
cd AgroFit
```

### 2. Base de datos

La base de datos **no está incluida** en el repositorio. Para crearla:

1. Abre MySQL (Workbench, XAMPP o consola).
2. Importa el archivo `proyecto_agrofit.sql`:

```bash
mysql -u <usuario> -p < proyecto_agrofit.sql
```

La base incluye:

- **Módulo institucional:** usuarios, fichas, programas y centros.
- **Módulo fitness:** ejercicios, rutinas, máquinas y seguimiento de progreso.

### 3. Backend en Python

Instala el conector de MySQL:

```bash
pip install mysql-connector-python
```

Después, revisa `usuarios/conexion.py` y configura tus datos de conexión (host, usuario, contraseña y nombre de la base de datos).

### 4. Ejecutar

- **Maquetación:** abre cualquier archivo `.html` en el navegador (por ejemplo con la extensión *Live Server* de VS Code).
- **Backend:** ejecuta el archivo principal del proyecto desde la carpeta raíz:

```bash
python main.py
```

---

## 👥 Roles y permisos

| Rol | Qué puede hacer |
|---|---|
| **Instructor** | Ver rutinas, asignar rutinas a los usuarios por número de documento, gestionar máquinas y usuarios |
| **Aprendiz** | Ver su rutina asignada |
| **Funcionario** | Ver su rutina asignada |

---

## 🔐 Seguridad

Las contraseñas **no se guardan en texto plano**: se cifran con SHA-256 antes de almacenarse en la base de datos.

---

## 🚧 Estado del proyecto

- [x] Maquetación del acceso: inicio de sesión, recuperación de contraseña y registro
- [x] Maquetación del panel del instructor
- [x] Base de datos MySQL
- [x] Registro de usuarios desde consola
- [ ] Conectar la maquetación con el backend
- [x] Menú de consola según el rol después del login
- [ ] Panel para aprendices y funcionarios

---

## 🌿 Control de versiones

Las versiones se marcan con tags de Git:

```bash
git tag                 # Ver las versiones
git show v1.0.0         # Ver los detalles de una versión
```

---

## 👤 Autores

- **Emanuel Merchan Bojorge** – Aprendiz SENA ADSO

---

## 📄 Licencia

Proyecto académico desarrollado en el **SENA**. Uso educativo.
