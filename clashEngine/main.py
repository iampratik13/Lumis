import subprocess

def run_step(name, command):
    print(f"\n🔹 {name}...")
    result = subprocess.run(command)
    
    if result.returncode != 0:
        print(f"❌ ERROR in {name}")
        exit()

run_step("STEP 1: Parsing IFC", ["python3", "ifc_test.py"])
run_step("STEP 2: Running Rerouting Engine", ["python3", "engine.py"])
run_step("STEP 3: Visualizing Results", ["python3", "visualize.py"])

print("\n✅ DONE: Full pipeline executed")