export interface RegistrationConfirmationProps {
  message: string;
}

const RegistrationConfirmation = ({
  message,
}: RegistrationConfirmationProps) => {
  return (
    <>
      <section>
        <h4 className="text-center">
          Thanks for filling out the registration!
        </h4>
        <p className="text-center mt-2">{message}</p>
      </section>
    </>
  );
};
export default RegistrationConfirmation;
