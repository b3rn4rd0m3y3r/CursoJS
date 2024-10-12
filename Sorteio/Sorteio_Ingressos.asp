<head>
	<title>Sorteio</title>
	<link rel="icon"       type="image/ico"       href="favicon.ico">
</head>
<%
'*
'* USO
'*
' Sorteio_Ingressos.aps?NoIngressos=nn&NoParticipantes=nnn
NO_INGRESSOS = Request("NoIngressos")
NO_PARTICIPANTES = Request("NoParticipantes")
Dim Marcados()
ReDim Marcados(NO_PARTICIPANTES+1)
Dim Ganhadores()
ReDim Ganhadores(NO_INGRESSOS+1)
ContLoop = 1
do while ContLoop < CInt(NO_INGRESSOS)+1
	Marcados(ContLoop) = 0
	ContLoop = ContLoop + 1
loop
ContLoop = 1
ContGan = 0
Chaves = ""
Randomize
do while ContLoop < CInt(NO_INGRESSOS)+1
	'Response.write CStr(Contloop) & " "
	num = Int(CInt(NO_PARTICIPANTES) * Rnd )+1
	if Marcados(num) > 0 then
		ContLoop = ContLoop - 1
	else
		Marcados(num) = num
		ContGan = ContGan + 1
		Ganhadores(ContGan) = num
		
		Chaves = Chaves & "<b>" & CStr(Contloop) & "</b>" & " " & CStr(num) & " <br>"
	end if
	ContLoop = ContLoop + 1
	
loop
'For i=1 to ContLoop -1
'	Response.write "<b>" & CStr(i) & "</b>" & " " & CStr(Ganhadores(i)) & " <br>" 
'Next
'* Ordenação
max=ContGan

For i=1 to max  
   For j=i+1  to max
      'Response.write i & "-" & j & " "
      if CInt(Ganhadores(i))>CInt(Ganhadores(j)) then 
          tmp=Ganhadores(i) 
          Ganhadores(i)=Ganhadores(j) 
          Ganhadores(j)=tmp 
     end if 
   next  
next 
'Response.write Chaves

For i=1 to NO_INGRESSOS
	Response.write "<b>" & CStr(i) & "</b>" & " " & CStr(Ganhadores(i)) & " <br>"
next
%>