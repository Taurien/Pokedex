import React from 'react'

const Result = ({ data }) => {

    const render = () => {

        const filter = Object.keys(data).map(el => {

            const title = el.charAt(0).toUpperCase() + el.slice(1).replace(/_/g, " ")

            if (typeof(data[el]) === 'object') {
                console.log(el, typeof(data[el]))
                console.log(data[el])
                
                return <><p key={el}>TODO</p></>
                // console.log(data[el])
                // data[el].forEach(el => {
                //     console.log(el)
                // })
            } else if ((typeof(data[el]) === 'boolean')) {
                return <><p key={el}>{title}: {data[el].toString()}</p></>
            } else {
                return <><p key={el}>{title}: {data[el]}</p></>
            }

        })

        return (
            <>
            { filter }
            </>
        )
    }

  return (
    <div>
        <p>{data.id}</p>
        {render()}
    </div>
  )
}

export default Result
