
		function sortfunction(a, b){
		  return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
		}

			function calcular(){ 
				//var valor = document.getElementById("campo").value;
				var fonte = document.getElementById("fonte").value;
				var titulo = document.getElementById("titulo").value;
				
				valor = "324 326 327 328 329 324 326 327 328 329 325 326 328 328 330 326 327 328 328 330";
                
				texto = valor.trim();
				
				var res = texto.split(" ");
				
				res.sort(sortfunction);
				
				//tamanho do rol
				rol = res;
				
				tamanho = arrayContar(res);
				
				i = tamanho.length;
				
				var cont = 0;
				w = 0;
				soma = 0;
				sfri =0;
				
				//testando criação de tabela
				var tabela = '<span="titulo">'+titulo+'</span>';
				tabela += '<table id="tabelacss">';
				tabela += '<thead><tr><th>i</th><th>ROL</th><th>f<sub>i</sub></th><th>fr<sub>i</sub></th><th>F<sub>i</sub></th><th>FR<sub>i</sub></th></tr></thead>';
				//testando criação de tabela
				
				
				
				while(w < i){
				tabela += '<tr>';						
					
					cont = tamanho[w][1];
					//soma
					soma = soma+cont;
					fri = cont / rol.length;
					sfri = sfri + fri;
					//console.log(w+1+"ºClasse "+control+" |- "+limite+" f =  " + cont + " Fri "+ fri.toFixed(2) + " F " + soma + " FRI "+ sfri.toFixed(2));
					tabela += '<td>'+(w+1)+"</td><td>"+(tamanho[w][0])+"</td><td> " + cont + " </td><td> "+ fri.toFixed(2) + "  </td><td> " + soma + " </td><td> "+ sfri.toFixed(2)+" </td>";
					
					//console.log(cont);
					
					
					cont = 0;
					w++;
					
					tabela += '</tr>';
					
				}
				tabela += '<tr><td></td><td></td><td>&Sigma;f<sub>1</sub> = '+soma+'</td><td>&Sigma;FR<sub>1</sub> = '+sfri+'</td><td></td><td></td></tr>';
				
				tabela += '</table>';
				tabela += fonte;
				document.getElementById('campoTabela').innerHTML=tabela;
				
			}
			
			
			function arrendondar(numeroRedondo){
				numeroRedondo = Math.round(numeroRedondo);
				
				return numeroRedondo;
			}
			
			
			function arrayContar(res){
			    arr = res;
                linha = [];
                coluna = [];
                
                
                for(x = 0;x<arr.length;x++){
                    //console.log(x);
                    if(x == 0){
                        coluna.push(arr[x]);
                        quantidade = contarValores(arr[x]);
                        coluna.push(quantidade);
                        //console.log(coluna);
                        linha.push(coluna);
                        //console.log(linha);
                        
                    }else{
                        if(linha[linha.length-1][0] != arr[x]){
                            coluna.push(arr[x]);
                            quantidade = contarValores(arr[x]);
                            coluna.push(quantidade);
                            linha.push(coluna);
                        }
                    }
                    
                    coluna = [];
                   
                    
                        
                }
                
                
				return linha;
			}
                             
            function contarValores(numero){
                contador = 0;
                
                for(y =0;y<arr.length;y++){
                    if(numero == arr[y]){
                        contador++
                    }
                }
                        
                return contador;
            }

			
			