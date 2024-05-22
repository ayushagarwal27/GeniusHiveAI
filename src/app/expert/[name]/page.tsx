import React, {FC} from 'react';

interface  ExpertPageProps{
    params:{name:string}
}

const ExpertPage:FC<ExpertPageProps> = ({params :{name}}) => {
    // TODO: UI for expert chat page
    return (
        <div>
            {
            //TODO Expert Image
            }
            {
            //TODO Expert chat box
            }
        </div>
    );
};

export default ExpertPage;