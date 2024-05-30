// import { useForm } from 'react-hook-form';
// import Button from './Button';

// interface InputModalProps {
//   type: string;
//   title: string;
//   submitForm: () => void;
// }

// export default function InputModal({ type, title, submitForm }: InputModalProps) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ mode: 'all' });

//   return (
//     <form onSubmit={handleSubmit(submitForm)}>
//       <label htmlFor={title}>
//         <input
//           type={type}
//           id={title}
//           placeholder={`Enter new ${title}`}
//           {...register('firstName', {
//             required: ErrorMessagesReg.REQUIRED,
//             pattern: {
//               value: /^[A-Za-z]+$/,
//               message: ErrorMessagesReg.NAME_FORMAT,
//             },
//           })}
//         />
//         <Button text="edit" isPrimary onClick={submitForm} submit />
//       </label>
//     </form>
//   );
// }
