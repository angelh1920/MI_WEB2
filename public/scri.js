const departamentos = {
  "Amazonas": ["Chachapoyas", "Bagua", "Utcubamba"],
  "Áncash": ["Huaraz", "Chimbote", "Casma"],
  "Apurímac": ["Abancay", "Andahuaylas", "Chalhuanca"],
  "Arequipa": ["Arequipa", "Cayma", "Yanahuara"],
  "Ayacucho": ["Huamanga", "Huanta", "La Mar"],
  "Cajamarca": ["Cajamarca", "Jaén", "Cutervo"],
  "Callao": ["Callao", "La Perla", "Bellavista"],
  "Cusco": ["Cusco", "Santiago", "Wanchaq"],
  "Huancavelica": ["Huancavelica", "Tayacaja", "Castrovirreyna"],
  "Huánuco": ["Huánuco", "Tingo María", "Leoncio Prado"],
  "Ica": ["Ica", "Chincha", "Nazca"],
  "Junín": ["Huancayo", "Tarma", "Chanchamayo"],
  "La Libertad": ["Trujillo", "Chepén", "Pacasmayo"],
  "Lambayeque": ["Chiclayo", "Lambayeque", "Ferreñafe"],
  "Lima": ["Miraflores", "San Isidro", "Surco", "Comas", "Lince"],
  "Loreto": ["Iquitos", "Nauta", "Yurimaguas"],
  "Madre de Dios": ["Puerto Maldonado", "Tambopata", "Manu"],
  "Moquegua": ["Moquegua", "Ilo", "Mariscal Nieto"],
  "Pasco": ["Cerro de Pasco", "Oxapampa", "Daniel Alcides Carrión"],
  "Piura": ["Piura", "Sullana", "Paita"],
  "Puno": ["Puno", "Juliaca", "Azángaro"],
  "San Martín": ["Moyobamba", "Tarapoto", "Lamas"],
  "Tacna": ["Tacna", "Alto de la Alianza", "Gregorio Albarracín"],
  "Tumbes": ["Tumbes", "Zarumilla", "Contralmirante Villar"],
  "Ucayali": ["Pucallpa", "Atalaya", "Padre Abad"]
};

// Validar formato de fecha (DD/MM/AAAA)
function validarFecha(fecha) {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  if (!regex.test(fecha)) return false;

  const [dia, mes, año] = fecha.split('/').map(Number);
  const fechaObj = new Date(año, mes - 1, dia);
  return (
    fechaObj.getFullYear() === año &&
    fechaObj.getMonth() === mes - 1 &&
    fechaObj.getDate() === dia
  );
}

window.addEventListener('DOMContentLoaded', () => {
  const departamentoSelect = document.getElementById('departamento');
  const distritoSelect = document.getElementById('distrito');

  // Llenar departamentos
  for (const dep in departamentos) {
    const option = document.createElement('option');
    option.value = dep;
    option.textContent = dep;
    departamentoSelect.appendChild(option);
  }

  // Llenar distritos cuando cambie el departamento
  departamentoSelect.addEventListener('change', () => {
    distritoSelect.innerHTML = '<option value="">Seleccione</option>';
    const distritos = departamentos[departamentoSelect.value] || [];
    distritos.forEach(d => {
      const option = document.createElement('option');
      option.value = d;
      option.textContent = d;
      distritoSelect.appendChild(option);
    });
  });

  // Validación del formulario
  document.getElementById('formCliente').addEventListener('submit', function (e) {
    e.preventDefault();

    const dni = document.getElementById('dni').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const fecha = document.getElementById('fechaNacimiento').value.trim();

    if (!/^\d{8}$/.test(dni)) {
      alert("El DNI debe tener exactamente 8 dígitos numéricos.");
      return;
    }

    if (!/^\d{9}$/.test(celular)) {
      alert("El número de celular debe tener exactamente 9 dígitos numéricos.");
      return;
    }

    if (!validarFecha(fecha)) {
      alert("La fecha de nacimiento debe tener el formato DD/MM/AAAA y ser válida.");
      return;
    }

    // Todo está correcto
    alert("¡Formulario enviado correctamente!");
    this.reset();
    distritoSelect.innerHTML = '<option value="">Seleccione</option>';
  });
});
