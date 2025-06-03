'use strict';

const JSON_FILE_PATH = 'file.json'; 

const studentsContainer = document.getElementById('students-container');


async function loadStudentsData() {
    try {
        const response = await fetch(JSON_FILE_PATH);

        if (!response.ok) {
            throw new Error(`Error al cargar el archivo JSON: ${response.status} ${response.statusText}`);
        }

        const students = await response.json(); 
        
       
        studentsContainer.innerHTML = '';

        
        students.forEach(student => { 
            const studentCard = document.createElement('div');
            studentCard.classList.add('student-card'); 

            let sumOfNormalizedProjectScores = 0; 
            let numberOfProjects = 0; 

            
            const calculateProjectNormalizedScore = (scoresArray) => {
                if (!Array.isArray(scoresArray) || scoresArray.length === 0) {
                    return 0; 
                }

                const sumScores = scoresArray.reduce((sum, s) => sum + (Number(s) || 0), 0);

                if (scoresArray.length > 1) {
                    return (sumScores / 10) * 5;
                } else {
                    const singleScore = Number(scoresArray[0]) || 0;
                    return singleScore > 5 ? (singleScore / 2) : singleScore;
                }
            };

            const formattedProjects = student.projects.map(project => {
                const normalizedScore = calculateProjectNormalizedScore(project.score);
                sumOfNormalizedProjectScores += normalizedScore; 
                numberOfProjects++; 
                return `<li>${project.name}: ${normalizedScore.toFixed(1)}</li>`;
            }).join('');

            const averageProjectScore = numberOfProjects > 0 
                                       ? (sumOfNormalizedProjectScores / numberOfProjects) 
                                       : 0;


            // URL para la imagen de perfil de GitHub
            const githubProfileImageUrl = student.usernameGithub 
                ? `https://github.com/${student.usernameGithub}.png` 
                : 'https://i.pinimg.com/736x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg'; // O una ruta imagen predeterminada

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
document.addEventListener('DOMContentLoaded', loadStudentsData);