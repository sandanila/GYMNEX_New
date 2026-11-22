import FirstName from "./FirstName"
import LastName from "./LastName"

function Name() {
  return (
    <div className="flex flex-col sm:flex-row my-6 gap-3">
      <FirstName/>
      <LastName/>
    </div>
  )
}

export default Name
