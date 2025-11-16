function UserListItem ({ firstName, lastName, age, imgSrc }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      <img
        src={imgSrc}
        width='60'
        height='60'
        style={{ borderRadius: '50%' }}
      />
      <div>
        <p>
          <b>
            {firstName} {lastName}
          </b>
        </p>
        <p>Age: {age}</p>
      </div>
    </div>
  )
}

export default UserListItem
