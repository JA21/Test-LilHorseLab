import TableComponent from "../../components/Table/table"
import ModalComponent from "../../components/modal/modal"
import FormComponent from "../../components/Form/form"
import './main.css';

export const InfoSeller = () => {
    const conten = (
        <div>
            <div className="modalFormInfoSeller">
            <h1>Crear vendedor</h1>
            <ModalComponent type={'post'} >
                <FormComponent type={'post'} data={null} />
            </ModalComponent>
            </div>
            <TableComponent />
        </div>
    )
    return conten
}
