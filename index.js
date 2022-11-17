// Write your solution in this file!
const employee = {name:"Joe",
                  streetAddress:1}
                
function updateEmployeeWithKeyAndValue(employee, key, value)
{const employeeCopy = { ...employee };

employeeCopy[key] = value;

return employeeCopy;}




function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value)
{   employee["name"] ="Sam";
    employee["streetAddress"] ="12 Broadway"
    
    return employee}

function deleteFromEmployeeByKey(employee, key)
{const noKeyEmployee = {...employee}
 delete noKeyEmployee["name"]
 return noKeyEmployee}

function destructivelyDeleteFromEmployeeByKey(employee, key)
{ delete employee["name"]
return employee}