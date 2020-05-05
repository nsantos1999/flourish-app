import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export default value => Intl.NumberFormat('pt-BR', {
    style: 'currency', 
    currency: 'BRL'
}).format(value)