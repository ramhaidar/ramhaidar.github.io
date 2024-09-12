function toggleSection(id) {
    const section = document.getElementById(id);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

function showSection(sectionId) {
    document.querySelectorAll('.bagian-kalkulasi').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

showSection('bagianLuasSegitiga');

function calculateTriangleArea() {
    const base = parseFloat(document.getElementById('alas_segitiga').value);
    const height = parseFloat(document.getElementById('tinggi_segitiga').value);
    const area = 0.5 * base * height;
    document.getElementById('hasilLuasSegitiga').textContent = `Luas: ${area}`;
}

function calculateTrianglePerimeter() {
    const side1 = parseFloat(document.getElementById('sisi_satu').value);
    const side2 = parseFloat(document.getElementById('sisi_dua').value);
    const side3 = parseFloat(document.getElementById('sisi_tiga').value);
    const perimeter = side1 + side2 + side3;
    document.getElementById('hasilKelilingSegitiga').textContent = `Keliling: ${perimeter}`;
}

function calculateParallelogramArea() {
    const base = parseFloat(document.getElementById('alasJajarGenjang1').value);
    const height = parseFloat(document.getElementById('tinggiJajarGenjang1').value);
    const area = base * height;
    document.getElementById('hasilLuasJajarGenjang').textContent = `Luas: ${area}`;
}

function calculateParallelogramPerimeter() {
    const base = parseFloat(document.getElementById('alasJajarGenjang2').value);
    const side = parseFloat(document.getElementById('tinggiJajarGenjang2').value);
    const perimeter = 2 * (base + side);
    document.getElementById('hasilKelilingJajarGenjang').textContent = `Keliling: ${perimeter}`;
}

function clearResults() {
    document.getElementById('hasilKelilingJajarGenjang').textContent = '';
    document.getElementById('hasilLuasJajarGenjang').textContent = '';
    document.getElementById('hasilKelilingSegitiga').textContent = '';
    document.getElementById('hasilLuasSegitiga').textContent = '';
}