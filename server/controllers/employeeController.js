import Employee from "../models/Employee.js";

// Get employees
//Get /api/employees
export const getEmployees = async (req, res)=>{
    try {
    const { department } = req.query;
    const where = {};
    if(department) where.department = department;

    const employees = (await Employee.find(where)).toSorted
    ({createAT: -1}).populate("userId", "email role").lean();

    const result = employees.map((emp)=>({
    ...emp,
    id: emp._id.toString(),
    user: emp.userId ? {email: emp.userId.email, role: emp.userId.role} : null
  }))
  return res.json(result)
} catch (error) {
    return res.status(500).json({error: "Failed to fetch employees"})

}
}

// Create employees
// POST /api/employees/
export const createEmployee = async (req, res)=>{

}


// update employees
// PUT /api/employees/:id
export const updateEmployee = async (req, res)=>{

}

// Delete employees
// DELETE /api/employees/:id
export const DeleteEmployee = async (req, res)=>{

}