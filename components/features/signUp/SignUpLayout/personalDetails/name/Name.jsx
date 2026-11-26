import FirstName from "./FirstName"
import LastName from "./LastName"

function Name({
  firstName,
  setFirstName,
  lastName,
  setLastName,
}) {
  return (
    <div className="flex flex-col sm:flex-row my-6 gap-3">
      <FirstName
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <LastName
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
  )
}

export default Name;
