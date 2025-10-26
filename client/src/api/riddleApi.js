export async function checkRiddle3Answer(player1, player2) {
  const res = await fetch("https://testriddleapp-server.onrender.com/api/riddle3/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ player1, player2 })
  })
  return res.json()
}
