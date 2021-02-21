using DocStore.Core.Entities;
using DocStore.Core.Interfaces;
using DocStore.Core.Requests;
using DocStore.Core.Services;
using NSubstitute;
using NUnit.Framework;

namespace DocStore.Core.UnitTests
{
    public class Tests
    {
        private IDocumentsQueryRepository _documentsQueryRepository;
        private IRepository<Doc> _repository;
        
        [SetUp]
        public void Setup()
        {
            _documentsQueryRepository = Substitute.For<IDocumentsQueryRepository>();
            _repository = Substitute.For<IRepository<Doc>>();
        }

        [Test]
        public void DocumentsService__Add__HappyCase()
        {
            // arrange
            var command = GetAddDocumentCommand();

            Doc returnDocument = command.Document;
            returnDocument.Id = "newId";
            _repository.Add(command.Document).Returns(returnDocument);
            
            var service = new DocumentsService(_repository, _documentsQueryRepository);

            // act
            var response = service.AddDocument(command);
            
            // assert
            Assert.NotNull(response);
            Assert.AreEqual(returnDocument.Id,response.RecordId);
        }
        
        [Test]
        public void DocumentsService__Update__HappyCase()
        {
            // arrange
            var command = GetUpdateDocumentCommand();
            _repository.Update(command.Document);
            
            var service = new DocumentsService(_repository, _documentsQueryRepository);

            // act
            var response = service.UpdateDocument(command);
            
            // assert
            _repository.Received().Update(command.Document);
        }

        [Test]
        public void DocumentsService__Store__AddCase()
        {
            // arrange
            var command = GetStoreDocumentCommand();
            _repository.RecordExists(command.Document.Id).Returns(false);
            _repository.Add(command.Document).Returns(command.Document);
            
            var service = new DocumentsService(_repository, _documentsQueryRepository);

            // act
            var response = service.StoreDocument(command);
            
            // assert
            _repository.Received().Add(command.Document);
        }
        
        [Test]
        public void DocumentsService__Store__UpdateCase()
        {
            // arrange
            var command = GetStoreDocumentCommand();
            _repository.RecordExists(command.Document.Id).Returns(true);
            _repository.Update(command.Document);
            
            var service = new DocumentsService(_repository, _documentsQueryRepository);

            // act
            var response = service.StoreDocument(command);
            
            // assert
            _repository.Received().Update(command.Document);
        }
        
        [Test]
        public void DocumentsService__PopulateAddDocumentCommand()
        {
            // arrange
            var command = GetAddDocumentCommand();
            var service = new DocumentsService(_repository, _documentsQueryRepository);

            // act
            var docAfter = service.PopulateNewDocumentFields(command.Document, "mrosario");
            
            // assert
            Assert.NotNull(docAfter);
            Assert.IsNotEmpty(docAfter.CreatedBy);
            Assert.IsNotEmpty(docAfter.Id);
        }        

        private AddDocumentCommand GetAddDocumentCommand()
        {
            var command = new AddDocumentCommand
            {
                Document = new Doc()
                {
                    CollectionName = "Test",
                    Id = "TestId",
                    JsonData = "{}",
                    Name = "Testing 123"
                },
                UserId = "TestUser"
            };
            return command;
        }
        
        private StoreDocumentCommand GetStoreDocumentCommand()
        {
            var command = new StoreDocumentCommand
            {
                Document = new Doc()
                {
                    CollectionName = "Test",
                    Id = "TestId",
                    JsonData = "{}",
                    Name = "Testing 123"
                },
                UserId = "TestUser"
            };
            return command;
        }
        
        private UpdateDocumentCommand GetUpdateDocumentCommand()
        {
            var command = new UpdateDocumentCommand
            {
                Document = new Doc()
                {
                    CollectionName = "Test",
                    Id = "TestId",
                    JsonData = "{}",
                    Name = "Testing 123"
                },
                UserId = "TestUser"
            };
            return command;
        }
        
    }
}