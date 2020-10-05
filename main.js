function main() {
    var canvas = document.getElementById("mycanvas");
    var gl = canvas.getContext("webgl");

    var vertexShaderCode = `
        void main() {
            gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
            gl_PointSize = 10.0;
        }
    `;
    // linking code in cpu to gpu with shader
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader,vertexShaderCode);
    
    // kompilasi jadi objek
    gl.compileShader(vertexShader);

    var fragmentShaderCode =`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
        }
    `;
    // linking cpu to gpu
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader,fragmentShaderCode);
    
    // kompilasi jadi objek
    gl.compileShader(fragmentShader);
    
    //request gl membuat program
    var shaderProgram = gl.createProgram();

    //memasukan shader ke penampung program
    gl.attachShader(shaderProgram,vertexShader);
    gl.attachShader(shaderProgram,fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);  
    
    gl.clearColor(0.2, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    //draw points
    gl.drawArrays(gl.POINTS,0,1);

}