import Image from 'next/image';

export default function AdmissionForm() {
  return (
    <div className="bg-gray-100 flex justify-center py-8">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Image src="/logo.png" alt="Logo" width={200} height={200} className="mx-auto" />
          <h1 className="text-2xl font-bold text-gray-800">Application For Admission</h1>
          <h2 className="text-lg text-gray-600">Program 2024/2025</h2>
        </div>

        <form>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-red-600 text-white font-semibold text-left px-2 py-2 col-span-2">
                  Personal Information
                </th>
              </tr>
            </thead>
            <tbody className="bg-yellow-100 text-sm font-sans">
              <tr>
                <td className="px-4 py-2 font-medium">Full Name</td>
                <td className="px-4 py-2">
                  <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Father&apos;s Name</td>
                <td className="px-4 py-2">
                  <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Date Of Birth</td>
                <td className="px-4 py-2">
                  <input type="date" className="w-full border border-gray-300 rounded-md p-2" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Gender</td>
                <td className="px-4 py-2">
                  <label className="mr-4">
                    <input type="radio" name="gender" className="mr-1" />Male
                  </label>
                  <label>
                    <input type="radio" name="gender" className="mr-1" />Female
                  </label>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Age</td>
                <td className="px-4 py-2">
                  <input type="number" min="18" max="30" className="w-full border border-gray-300 rounded-md p-2" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Address</td>
                <td className="px-4 py-2">
                  <textarea className="w-full border border-gray-300 rounded-md p-2 row-span-3"></textarea>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">City</td>
                <td className="px-4 py-2">
                  <select className="w-full border border-gray-300 rounded-md p-2">
                    <option>Select City</option>
                    <option>Karachi</option>
                    <option>Islamabad</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Phone</td>
                <td className="px-4 py-2">
                  <input type="tel" className="w-full border border-gray-300 rounded-md p-2" />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">E-Mail Address</td>
                <td className="px-4 py-2">
                  <input type="email" className="w-full border border-gray-300 rounded-md p-2" />
                </td>
              </tr>
            </tbody>

            <thead>
              <tr>
                <th className="bg-red-600 text-white font-semibold text-left px-4 py-2 col-span-2">
                  Program Selection
                </th>
              </tr>
            </thead>
            <tbody className="bg-yellow-100 text-sm font-sans">
              <tr>
                <td className="px-4 py-2 font-medium">Select Program</td>
                <td className="px-4 py-2">
                  <label className="mr-4">
                    <input type="radio" name="program" className="mr-1" />Theatre
                  </label>
                  <label>
                    <input type="radio" name="program" className="mr-1" />Music
                  </label>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">
                  <button type="reset" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded">
                    Reset
                  </button>
                  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
