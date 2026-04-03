function mudarCor() {
    const cores = ['#0070f3', '#f81ce5', '#7928ca', '#ff0080'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.querySelector('h1').style.filter = `hue-rotate(${Math.random() * 360}deg)`;
    console.log("Deploy funcionando com sucesso!");
}