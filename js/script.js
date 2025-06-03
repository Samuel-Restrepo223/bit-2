'use strict';

// assets/js/script.js

// Ruta a tu archivo JSON. Asegúrate de que sea correcta.
const JSON_FILE_PATH = 'file.json'; // O 'assets/file.json' si está dentro de 'assets'

// Contenedor donde vamos a mostrar la información
const studentsContainer = document.getElementById('students-container');

// Función para cargar los datos del JSON
async function loadStudentsData() {
    try {
        const response = await fetch(JSON_FILE_PATH);

        if (!response.ok) {
            throw new Error(`Error al cargar el archivo JSON: ${response.status} ${response.statusText}`);
        }

        const students = await response.json(); // 'students' ahora es el array de objetos del JSON
        
        // Limpiar el mensaje de "Cargando datos..."
        studentsContainer.innerHTML = '';

        // Iterar sobre cada estudiante y mostrar su información
        students.forEach(student => { // Este bucle es crucial para procesar cada estudiante.
            const studentCard = document.createElement('div');
            studentCard.classList.add('student-card'); // Puedes usar esta clase para estilizar con CSS

            let sumOfNormalizedProjectScores = 0; // Para la suma de las notas NORMALIZADAS de CADA proyecto del estudiante
            let numberOfProjects = 0; // Para contar cuántos proyectos tiene el estudiante

            // Función auxiliar para calcular y normalizar la nota de un proyecto
            const calculateProjectNormalizedScore = (scoresArray) => {
                if (!Array.isArray(scoresArray) || scoresArray.length === 0) {
                    return 0; // Si no es un array o está vacío, la nota es 0
                }

                const sumScores = scoresArray.reduce((sum, s) => sum + (Number(s) || 0), 0);

                if (scoresArray.length > 1) {
                    // Si es un array de múltiples notas (ej. [1, 1, 0.5, ...])
                    return (sumScores / 10) * 5; // Normaliza la suma de hasta 10 puntos a una escala de 0-5
                } else {
                    // Si es un array con un solo elemento (ej. [4], [9.5], [0])
                    const singleScore = Number(scoresArray[0]) || 0;
                    return singleScore > 5 ? (singleScore / 2) : singleScore; // Si el valor es > 5, asume que es sobre 10 y lo divide por 2
                }
            };

            // Recorrer los proyectos para calcular las notas individuales normalizadas y la suma total
            const formattedProjects = student.projects.map(project => {
                const normalizedScore = calculateProjectNormalizedScore(project.score);
                sumOfNormalizedProjectScores += normalizedScore; // Acumular la suma de las notas normalizadas
                numberOfProjects++; // Contar los proyectos
                return `<li>${project.name}: ${normalizedScore.toFixed(1)}</li>`;
            }).join('');

            // Calcular el promedio general de las notas de proyectos del estudiante
            const averageProjectScore = numberOfProjects > 0 
                                       ? (sumOfNormalizedProjectScores / numberOfProjects) 
                                       : 0;


            // URL para la imagen de perfil de GitHub
            const githubProfileImageUrl = student.usernameGithub 
                ? `https://github.com/${student.usernameGithub}.png` 
                : 'https://i.pinimg.com/736x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg'; // O una ruta a tu propia imagen predeterminada

            studentCard.innerHTML = `
                <h2>${student.student}</h2>
                <p><strong>Código:</strong> ${student.code}</p>
                <p><strong>Intensidad:</strong> ${student.intensity}</p>
                ${student.usernameGithub ? 
                    `<p><strong>Usuario GitHub:</strong> <a href="https://github.com/${student.usernameGithub}" target="_blank">${student.usernameGithub}</a></p>
                     <img src="${githubProfileImageUrl}" alt="Perfil de GitHub de ${student.student}" style="width: 80px; height: 80px; border-radius: 50%; margin-top: 10px;">` 
                    : `<p><strong>Usuario GitHub:</strong> No especificado</p>
                       <img src="${githubProfileImageUrl}" alt="No hay imagen de GitHub" style="width: 80px; height: 80px; border-radius: 50%; margin-top: 10px;">`
                }
                <p><strong>Proyectos:</strong></p>
                <ul>
                    ${formattedProjects}
                </ul>
                <p><strong>Promedio de Notas de Proyectos:</strong> ${averageProjectScore.toFixed(1)}</p>
                <hr>
            `;
            
            studentsContainer.appendChild(studentCard);
        }); 

    } catch(error) {
        console.error("Error al cargar o procesar los datos de los estudiantes:", error);
        studentsContainer.innerHTML = `<p style="color: red;">No se pudieron cargar los datos de los estudiantes. ${error.message}</p>`;
    }
}

// Llamar a la función para cargar los datos cuando la página se cargue
document.addEventListener('DOMContentLoaded', loadStudentsData);