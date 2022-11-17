import { Input, Select, InputLabel, MenuItem, Box} from "@mui/material"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

interface RegisterFormData {
  name: string
  email: string
  address_line_1: string
  address_line_2: string
  city: string
  province: string
  postal_code: string
  agree_to_terms: boolean
}

function App() {
  const { register, handleSubmit, formState: {errors} } = useForm<RegisterFormData>()


  const [userData, setUserData] = useState<RegisterFormData>();
  const onSubmit = (data:RegisterFormData) => {
    setUserData(data)
    console.log(data)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>

        <InputLabel>Name</InputLabel>
        <Input type="text" placeholder="Enter your name" {...register("name", { required: true})} />
        {errors.name && <span>This field is required</span>}
        
        <InputLabel>Email</InputLabel>
        <Input type="text" placeholder="Enter your email" {...register("email", { required: true})}/>
        {errors.email && <span>This field is required</span>}

        <InputLabel>Address Line 1</InputLabel>
        <Input type="text" placeholder="Enter your address" {...register("address_line_1", { required: true})}/>
        {errors.address_line_1 && <span>This field is required</span>}

        <InputLabel>Address Line 2</InputLabel>
        <Input type="text" placeholder="Enter your address" {...register("address_line_2")}/>

        <InputLabel>City</InputLabel>
        <Input type="text" placeholder="Enter your city" {...register("city", { required: true})}/>
        {errors.city && <span>This field is required</span>}

        <InputLabel>Province</InputLabel>
        <Select fullWidth={true}{...register("province", { required: true})}>
          <MenuItem value='' selected={true}>Select a province</MenuItem>
          <MenuItem value="Alberta">Alberta</MenuItem>
          <MenuItem value="British Columbia">British Columbia</MenuItem>
          <MenuItem value="Manitoba">Manitoba</MenuItem>
          <MenuItem value="New Brunswick">New Brunswick</MenuItem>
          <MenuItem value="Newfoundland and Labrador">Newfoundland and Labrador</MenuItem>
          <MenuItem value="Nova Scotia">Nova Scotia</MenuItem>
          <MenuItem value="Ontario">Ontario</MenuItem>
          <MenuItem value="Prince Edward Island">Prince Edward Island</MenuItem>
          <MenuItem value="Quebec">Quebec</MenuItem>
          <MenuItem value="Saskatchewan">Saskatchewan</MenuItem>
          <MenuItem value="Northwest Territories">Northwest Territories</MenuItem>
          <MenuItem value="Nunavut">Nunavut</MenuItem>
          <MenuItem value="Yukon">Yukon</MenuItem>
        </Select>
        {errors.province && <span>This field is required</span>}

        <InputLabel>Postal Code</InputLabel>
        <Input type="text" placeholder="Enter your postal code" {...register("postal_code", { required: true})}/>
        {errors.postal_code && <span>This field is required</span>}

        <br />
        <Box>
          <Input type="checkbox" {...register("agree_to_terms", { required: true})}/>
          <InputLabel>Agree to Terms and Conditions</InputLabel>
        </Box>
        
        {errors.agree_to_terms && <span>This field is required</span>}

        <button type="submit">Submit</button>
      </form>

      <div>
        <table>
          <thead>
              <th>Name</th>
              <th>Email</th>
              <th>Address Line 1</th>
              <th>Address Line 2</th>
              <th>City</th>
              <th>Province</th>
              <th>Postal Code</th>
          </thead>
          <tbody>
            <tr>
              <td>{userData?.name}</td>
              <td>{userData?.email}</td>
              <td>{userData?.address_line_1}</td>
              <td>{userData?.address_line_2}</td>
              <td>{userData?.city}</td>
              <td>{userData?.province}</td>
              <td>{userData?.postal_code}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
