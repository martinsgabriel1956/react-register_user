import { ButtonComponent } from './styles';

export function Button({children, ...props}) {
  return(
    <>
    <ButtonComponent {...props}>
      {children}
    </ButtonComponent>
    </>
  )
}