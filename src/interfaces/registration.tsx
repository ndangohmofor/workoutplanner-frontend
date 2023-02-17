export interface registration {
  username: string;
  email: string;
  role?: string;
  password: string;
  confirmPassword: string;
}

export interface registrationFormInputs {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  label: string;
  pattern?: string;
  required: boolean;
}
