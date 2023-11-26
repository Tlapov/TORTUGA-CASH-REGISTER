import { ChangeEvent, useState } from "react";

type ErrorRecord = {[key: string]: string | undefined};

interface IDataForm {
  [key: string]: {
    value: string | boolean,
    required?: boolean,
    custom?: {
      isValid: (value: string) => boolean;
      message: string
    }
  }
}

export const useForm = (dataForm: IDataForm ) => {
  const initalForm: any = {};

  Object.keys(dataForm).map((d) => {
    {initalForm[d] = dataForm[d].value} 
  });

  const [data, setData] = useState((initalForm));
  const [errors, setErrors] = useState<ErrorRecord>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>, checkbox?: boolean) => {
    const key = e.target.name;
    const value = checkbox ? e.target.checked : e.target.value;

    setData({
      ...data,
      [key]: value,
    });

    let valid: boolean = true;
    
    if(dataForm[key]?.required && !value) {
      valid = false;
      let message = `Polje ${key} ne smije biti prazno`
      setErrors({...errors, [key]: message});
    }else if(dataForm[key]?.custom && !dataForm[key]?.custom?.isValid(value as string)) {
      valid = false;
      setErrors({...errors, [key]: dataForm[key]?.custom?.message});
    };

    valid && delete errors[key];
  };

  return {
    data,
    errors,
    handleChange
  };  
}


// import { ChangeEvent, FormEvent, useState } from 'react';

// interface Validation {
//   required?: {
//     value: boolean;
//     message: string;
//   };
//   pattern?: {
//     value: string;
//     message: string;
//   };
//   custom?: {
//     isValid: (value: string) => boolean;
//     message: string;
//   };
// }


// type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;

// export const useForm = <T extends Record<keyof T, any> = {}>(options?: {
//   validations?: Validations<T>;
//   initialValues?: Partial<T>;
//   onSubmit?: () => void;
// }) => {
//   const [data, setData] = useState<T>((options?.initialValues || {}) as T);
//   const [errors, setErrors] = useState<ErrorRecord<T>>({});

//   // Needs to extend unknown so we can add a generic to an arrow function
//   const handleChange = <S extends unknown>(
//     key: keyof T,
//     sanitizeFn?: (value: string) => S
//   ) => (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
//     const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
//     setData({
//       ...data,
//       [key]: value,
//     });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const validations = options?.validations;
//     if (validations) {
//       let valid = true;
//       const newErrors: ErrorRecord<T> = {};
//       for (const key in validations) {
//         const value = data[key];
//         const validation = validations[key];
//         if (validation?.required?.value && !value) {
//           valid = false;
//           newErrors[key] = validation?.required?.message;
//         }

//         const pattern = validation?.pattern;
//         if (pattern?.value && !RegExp(pattern.value).test(value)) {
//           valid = false;
//           newErrors[key] = pattern.message;
//         }

//         const custom = validation?.custom;
//         if (custom?.isValid && !custom.isValid(value)) {
//           valid = false;
//           newErrors[key] = custom.message;
//         }
//       }

//       if (!valid) {
//         setErrors(newErrors);
//         return;
//       }
//     }

//     setErrors({});

//     if (options?.onSubmit) {
//       options.onSubmit();
//     }
//   };

//   return {
//     data,
//     handleChange,
//     handleSubmit,
//     errors,
//   };
// };



// import { FC } from 'react';
// import { useForm } from '../useForm';
// import './Registration.scss';

// type Gender = 'male' | 'female' | 'non-binary';

// interface User {
//   name: string;
//   age: number;
//   email: string;
//   gender: Gender;
//   password: string;
// }

// const Registration: FC = () => {
//   const { handleSubmit, handleChange, data: user, errors } = useForm<User>({
//     validations: {
//       name: {
//         pattern: {
//           value: '^[A-Za-z]*$',
//           message:
//             "You're not allowed to use special characters or numbers in your name.",
//         },
//       },
//       age: {
//         custom: {
//           isValid: (value) => parseInt(value, 10) > 17,
//           message: 'You have to be at least 18 years old.',
//         },
//       },
//       password: {
//         custom: {
//           isValid: (value) => value.length > 6,
//           message: 'The password needs to be at least 6 characters long.',
//         },
//       },
//     },
//     onSubmit: () => alert('User submitted!'),
//   });

//   return (
//     <form className="registration-wrapper" onSubmit={handleSubmit}>
//       <h1>Registration</h1>
//       <input
//         placeholder="Name*"
//         value={user.name || ''}
//         onChange={handleChange('name')}
//         required
//       />
//       {errors.name && <p className="error">{errors.name}</p>}
//       <input
//         placeholder="Age"
//         type="number"
//         value={user.age || ''}
//         onChange={handleChange<number>('age', (value) => parseInt(value, 10))}
//       />
//       {errors.age && <p className="error">{errors.age}</p>}
//       <input
//         placeholder="Email*"
//         type="email"
//         value={user.email || ''}
//         onChange={handleChange('email')}
//       />
//       <input
//         placeholder="Password*"
//         type="password"
//         value={user.password || ''}
//         onChange={handleChange('password')}
//       />
//       {errors.password && <p className="error">{errors.password}</p>}
//       <select onChange={handleChange('gender')} required>
//         <option value="" disabled selected>
//           Select gender*
//         </option>
//         <option value="male" selected={user.gender === 'male'}>
//           Male
//         </option>
//         <option value="female" selected={user.gender === 'female'}>
//           Female
//         </option>
//         <option value="non-binary" selected={user.gender === 'non-binary'}>
//           Non-binary
//         </option>
//       </select>
//       <button type="submit" className="submit">
//         Submit
//       </button>
//     </form>
//   );
