
		function sortfunction(a, b){
		  return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
		}

		function calcular(){ 
			
			var valor = "25 22 35 28 35 33";
	
			texto = valor.trim();
			
			var res = texto.split(" ");
			
			res.sort(sortfunction);
			
			//tamanho do rol
			rol = res;
			
			
			soma = somaArray(rol);
			media = soma / rol.length;
			var instrucao = "";
			
			instrucao += "Média = "+media.toFixed(2);
			
			moda = arrayContar(rol);
			
			//console.log(moda);
			instrucao += "<br>Moda = "+moda;
			
			//console.log(mediana(rol));
			instrucao += "<br>Mediana = "+mediana(rol);
			
			document.getElementById("campoTabela").innerHTML = instrucao;
			
			
			
		}
		
		function mediana(values){
			if(values.length % 2 == 0){
				media = values.length / 2;
				n1 = (values[media]);
				n2 = (values[media-1]);
				media = (eval(n1) + eval(n2))/ 2;
				
				return media;
				
			}else{
			media = values.length / 2;
			
			console.log(media);
				return Math.round(media);
			}
			
			
			
		}

		
		function somaArray(rol){
			var soma = 0;
			
			for(x = 0;x < rol.length;x++){
				soma = eval(rol[x]) + soma;
			}
			
			return soma;
		}
		
		function arrayContar(res){
			    arr = res;
                linha = [];
                coluna = [];
				valores = [];
                maior = 0;
                for(x = 0;x<arr.length;x++){
                    //console.log(x);
                    if(x == 0){
                        coluna.push(arr[x]);
                        quantidade = contarValores(arr[x]);
                        coluna.push(quantidade);
                        //console.log(coluna);
                        linha.push(coluna);
                        //console.log(linha);
						maior = 0;
                       
                    }else{
                        if(linha[linha.length-1][0] != arr[x]){
                            coluna.push(arr[x]);
                            quantidade = contarValores(arr[x]);
                            coluna.push(quantidade);
                            linha.push(coluna);
							
							//maior
							if(quantidade == maior){
								valores.push(arr[x]);
								maior = quantidade;
							}else if(quantidade > maior){
								valores = [];
								valores.push(arr[x]);
								maior = quantidade;
							}
                        }
                    }
                     coluna = [];
           
                }
                
                if(valores.length == 1){
				
					return valores;
				}else if(valores.length > 1){
					valores = "amodal";
					
					return valores;
					
				}
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
		
			