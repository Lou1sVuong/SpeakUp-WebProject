import React from 'react'

function Buttontest() {
  return (
    <div>
         <Button primary>
        Click Me
      </Button>
      <Button secondary>
        Secondary Button
      </Button>
      <Button rightIcon="➡️">
        Button with Right Icon
      </Button>
      <Button leftIcon="⬅️">
        Button with Left Icon
      </Button>
      <Button primary leftIcon="⬅️"  rightIcon="➡️" >
        Button with Left Icon
      </Button>
    </div>
  )
}

export default Buttontest
