import pyttsx3
import pyPDF2
speaker = pyttsx3.init()
speaker.say("hello this is piyush kumar")
book = open('read.pdf','rb')
reader = pyPDF2.PdfFileReader(book)
print(reader.getNumPages)
speaker.runAndWait()