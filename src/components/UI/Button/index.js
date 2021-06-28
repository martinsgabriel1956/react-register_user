import { ButtonComponent } from './styles';

export function Button({children, ...props}) {
  return(
    <ButtonComponent 
      onClick={props.onClick} 
      type={props.type || 'button'}
    >
      {children}
    </ButtonComponent>
  )
}