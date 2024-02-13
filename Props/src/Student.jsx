//PropTypes = um mecanismo que garante que o valor passado tem o Datatype(Tipo de Data) Correto
//age : propTypes.number

import PropTypes from 'prop-types' //essa pasta está dentro do node_modules entao não precisa indicar diretamente
                                  // o caminho dela , Somente a pasta

function Student(props){
    return(
        <div className="student-card">
            <p> Name:{props.name} </p>
            <p> Age:{props.age} </p>
            <p> isStudent:{props.isStudent ? 'Yes' : 'no'} </p>
        </div>
    )
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,

}
//Default props = Valores default para props caso eles nao forem passados
//name: 'Guest'
Student.defaultProps ={
    name:'Guest',
    age:0,
    isStudent:false,
}



export default Student