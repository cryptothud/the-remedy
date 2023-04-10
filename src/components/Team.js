const Team = () => {
    const members = [
        {
            name: "Lindsey",
            role: "Owner",
            image: "/team/lindsey.png"
        }, {
            name: "Ryan",
            role: "Owner",
            image: "/team/ryan.png"
        }, {
            name: "Abbie & Piper",
            role: "Guard Dogs",
            image: "/team/dogs.png"
        }
    ]

    return (
        <div className="team">
            {members.map((member) => {
                return (
                    <div className="member" key={JSON.stringify(member)}>
                        <img src={member.image} alt="Team Member" />
                        <h3>{member.name}</h3>
                        <h4>{member.role}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default Team