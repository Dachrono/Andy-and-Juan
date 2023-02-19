function viralAdvertising(n) 
{
  let liked = 0
  let shared = 5
  let comulative = 0

  for(let b = 1; b <= n; b++)
  {
    liked = Math.floor(shared/2)
    comulative = comulative + liked

    shared = liked * 3 
  } 

  return comulative
}

viralAdvertising(5)