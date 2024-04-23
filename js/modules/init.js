export async function init() {
    // console.log("async function init was successfully exported from init.js and imported into script.js and called from script.js")

    try {
        const employeesFetch = await fetch('./data/employees.json')
        const employeesData = await employeesFetch.json()
        // console.log("THIS IS THE INIT FUNCTION")
        // console.log(employeesData.employees) // good

        return employeesData.employees
    } catch (error) {
        console.log(error)
    }
    
    

    



}