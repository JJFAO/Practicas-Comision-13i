const exampleImage = 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'

export default function Perfil({onChangeImg}) {
    const user = { nombre: 'rick'}

    return (
        <div>
            <h2>Perfil</h2>
            <div className="text-center bg-white p-2 my-5">
            <div className="d-flex justify-content-center align-items-end ml-4 m-2">
                <img
                    src={user.imagen || exampleImage}
                    alt="profile"
                    width="200"
                    className="rounded-circle"
                    style={{ border: '2px solid #18809a' }}
                />
                <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
                    <img
                        src="https://icongr.am/feather/camera.svg?size=128&color=293f8e"
                        alt="camera edit"
                        width="20"
                    />
                </label>
                <input id="file-input" className="d-none" accept="image/png, image/jpeg" type="file" onChange={onChangeImg} />
            </div>
            <p>Nombre: {user.nombre}</p>
        </div>
        </div>
    )
}
