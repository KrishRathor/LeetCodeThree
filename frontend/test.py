import subprocess

def run_cpp_code(code):
    p = subprocess.Popen(['g++', '-x', 'c++', '-o', 'a.out', '-'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = p.communicate(input=code.encode())
    if stderr:
        return stderr.decode()
    p = subprocess.Popen(['./a.out'], stdout=subprocess.PIPE)
    stdout, stderr = p.communicate()
    return stdout.decode()

def run_java_code(code):
    # Save the Java code to a file
    with open("Main.java", "w") as file:
        file.write(code)

    # Compile the Java code
    compile_result = subprocess.run(["javac", "Main.java"], capture_output=True)
    if compile_result.returncode != 0:
        return f"Compilation Error: {compile_result.stderr.decode()}"

    # Run the Java code and capture the output
    run_result = subprocess.run(["java", "Main"], capture_output=True)
    if run_result.returncode != 0:
        return f"Runtime Error: {run_result.stderr.decode()}"
        
    return run_result.stdout.decode()

def run_c_code(code):
    filename = "temp.c"
    with open(filename, "w") as f:
        f.write(code)
    result = subprocess.run(["gcc", filename, "-o", "temp"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if result.returncode == 0:
        result = subprocess.run(["./temp"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        output = result.stdout.decode('utf-8')
    else:
        output = result.stderr.decode('utf-8')
    return output

def run_js_code(code):
    filename = "temp.js"
    with open(filename, "w") as f:
        f.write(code)
    result = subprocess.run(["node", filename], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output = result.stdout.decode('utf-8')
    return output

code = '''
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << "Sum is: " << a + b << endl;
    return 0;
}
'''


