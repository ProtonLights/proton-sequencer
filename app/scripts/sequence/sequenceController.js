(function () {
    'use strict';
    angular.module('app')
        .controller('sequenceController', ['sequenceService', SequenceController]);

    function SequenceController(sequenceService) {
        var self = this;

        self.selected = null;
        self.sequences = [];
        self.selectedIndex = 0;

        // Load initial data
        getAllSequences();

        //----------------------
        // Internal functions
        //----------------------

        function selectSequence(sequence, index) {
            self.selected = sequence;
            self.selectedIndex = index;
        }

        function deleteSequence($event) {
          // sequenceService.delete() or whatever the service uses
        }

        function saveSequence($event) {
            if (self.selected != null && self.selected.customer_id != null) {
                  // sequenceService.update() or whatever the service uses
            } else {
                  // sequenceService.save() or whatever the service uses.
            }
        }

        function createSequence() {
            self.selected = {};
            self.selectedIndex = null;

            // Interface with the CLI to get create a new sequence, then populate information
        }

        function getAllSequences() {
            customerService.getSequenceData().then(function (sequences) {
                self.sequences = [].concat(sequences);
                self.selected = sequences[0];
            });
        }
    }

})();
