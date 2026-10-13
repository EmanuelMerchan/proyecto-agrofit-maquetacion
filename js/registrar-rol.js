document.addEventListener('DOMContentLoaded', () => {
  const botonesRol = document.querySelectorAll('.roles-btn');
  const dynamicFields = document.getElementById('dynamicFields');
  const staffFields = document.getElementById('staffFields');
  const apprenticeFields = document.getElementById('apprenticeFields');
  const dependenciaField = document.getElementById('dependenciaField');
  const vinculacionSelect = document.getElementById('vinculacionSelect');
  const contractDetails = document.getElementById('contractDetails');

  // Ocultar todo al inicio
  dynamicFields.style.display = 'none';
  staffFields.style.display = 'none';
  apprenticeFields.style.display = 'none';
  dependenciaField.style.display = 'none';
  contractDetails.style.display = 'none';

  // Función para mostrar/ocultar contrato según select
  function toggleCamposContrato() {
    if (vinculacionSelect.value === 'contrato') {
      contractDetails.style.display = 'block';
    } else {
      contractDetails.style.display = 'none';
    }
  }

  // Asignar evento a cada botón de rol
  botonesRol.forEach(boton => {
    boton.addEventListener('click', () => {
      // Resetear estilos de botones
      botonesRol.forEach(btn => btn.style.backgroundColor = 'white');
      boton.style.backgroundColor = 'rgb(210, 241, 210)';

      // Ocultar todo antes de mostrar
      staffFields.style.display = 'none';
      apprenticeFields.style.display = 'none';
      dependenciaField.style.display = 'none';
      contractDetails.style.display = 'none';

      // Mostrar contenedor principal
      dynamicFields.style.display = 'block';

      const textoRol = boton.textContent.trim().toLowerCase();

      if (textoRol.includes('aprendiz')) {
        apprenticeFields.style.display = 'block';
      } else if (textoRol.includes('entrenador') || textoRol.includes('funcionario')) {
        staffFields.style.display = 'block';
        dependenciaField.style.display = 'block';
        toggleCamposContrato();
      }
    });
  });

  // Evento para el select de vinculación
  vinculacionSelect.addEventListener('change', toggleCamposContrato);
});
