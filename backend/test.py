import js2py

def run_js_code(func_str, args_list):
    # Convert the arguments list to a comma-separated string
    args_str = ",".join([repr(arg) for arg in args_list])
    # Construct the JavaScript code to call the function with the arguments
    js_code = f"({func_str})({args_str})"
    # Use js2py to execute the JavaScript code and get the result
    result = js2py.eval_js(js_code)
    # Return the result
    return result


